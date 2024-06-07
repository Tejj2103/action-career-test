const express = require('express');
const router = new express.Router();
const cheerio = require('cheerio');

const actionPageUri = process.env.ACTION_PAGE_URI;


router.get("/getOpenOpsitions", async (req, res) => {
    const department = req.query.department;
    if (!department) {
        return res.send("Department is required!")
    }
    try {
        const response = await fetch(actionPageUri).then(res => res.text());
        const result = getValue(response, department);
        return res.send(`result: ${result}`);
    } catch (e) {
        console.log("err", e)
        return res.send("Some error has ocurred").sendStatus(500);;
    }
})


const getValue = (res, department) => {
    const $ = cheerio.load(res);
    let jobList = '';
    $('.accordion-item').each(function () {
        let inner_text = $(this).find('.category-name').text();
        if (inner_text === department) {
            jobList = $(this).find(".job-name");
        }
    });
    if (!jobList) {
        return "No department found!.";
    }
    return jobList;
}

module.exports = router;