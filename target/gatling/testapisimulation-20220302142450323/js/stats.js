var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "1902",
        "ok": "1464",
        "ko": "438"
    },
    "minResponseTime": {
        "total": "206",
        "ok": "206",
        "ko": "20002"
    },
    "maxResponseTime": {
        "total": "60015",
        "ok": "17822",
        "ko": "60015"
    },
    "meanResponseTime": {
        "total": "6992",
        "ok": "2997",
        "ko": "20347"
    },
    "standardDeviation": {
        "total": "7753",
        "ok": "2761",
        "ko": "1955"
    },
    "percentiles1": {
        "total": "2576",
        "ok": "2391",
        "ko": "20109"
    },
    "percentiles2": {
        "total": "10658",
        "ok": "2771",
        "ko": "20329"
    },
    "percentiles3": {
        "total": "20361",
        "ok": "10308",
        "ko": "20674"
    },
    "percentiles4": {
        "total": "20687",
        "ok": "11344",
        "ko": "23734"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 6,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 99,
    "percentage": 5
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1359,
    "percentage": 71
},
    "group4": {
    "name": "failed",
    "count": 438,
    "percentage": 23
},
    "meanNumberOfRequestsPerSecond": {
        "total": "31.18",
        "ok": "24",
        "ko": "7.18"
    }
},
contents: {
"req_get-user-reques-a4fef": {
        type: "REQUEST",
        name: "get user request",
path: "get user request",
pathFormatted: "req_get-user-reques-a4fef",
stats: {
    "name": "get user request",
    "numberOfRequests": {
        "total": "1000",
        "ok": "902",
        "ko": "98"
    },
    "minResponseTime": {
        "total": "873",
        "ok": "873",
        "ko": "20085"
    },
    "maxResponseTime": {
        "total": "60015",
        "ok": "17822",
        "ko": "60015"
    },
    "meanResponseTime": {
        "total": "4298",
        "ok": "2469",
        "ko": "21124"
    },
    "standardDeviation": {
        "total": "5936",
        "ok": "1787",
        "ko": "4032"
    },
    "percentiles1": {
        "total": "2407",
        "ok": "2355",
        "ko": "20565"
    },
    "percentiles2": {
        "total": "2776",
        "ok": "2596",
        "ko": "20665"
    },
    "percentiles3": {
        "total": "20554",
        "ok": "3505",
        "ko": "23715"
    },
    "percentiles4": {
        "total": "20778",
        "ok": "10754",
        "ko": "25008"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 75,
    "percentage": 8
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 827,
    "percentage": 83
},
    "group4": {
    "name": "failed",
    "count": 98,
    "percentage": 10
},
    "meanNumberOfRequestsPerSecond": {
        "total": "16.393",
        "ok": "14.787",
        "ko": "1.607"
    }
}
    },"req_get-user-reques-70c35": {
        type: "REQUEST",
        name: "get user request Redirect 1",
path: "get user request Redirect 1",
pathFormatted: "req_get-user-reques-70c35",
stats: {
    "name": "get user request Redirect 1",
    "numberOfRequests": {
        "total": "902",
        "ok": "562",
        "ko": "340"
    },
    "minResponseTime": {
        "total": "206",
        "ok": "206",
        "ko": "20002"
    },
    "maxResponseTime": {
        "total": "20561",
        "ok": "17797",
        "ko": "20561"
    },
    "meanResponseTime": {
        "total": "9980",
        "ok": "3843",
        "ko": "20123"
    },
    "standardDeviation": {
        "total": "8408",
        "ok": "3683",
        "ko": "127"
    },
    "percentiles1": {
        "total": "3344",
        "ok": "2566",
        "ko": "20057"
    },
    "percentiles2": {
        "total": "20036",
        "ok": "3048",
        "ko": "20179"
    },
    "percentiles3": {
        "total": "20317",
        "ok": "10470",
        "ko": "20348"
    },
    "percentiles4": {
        "total": "20427",
        "ok": "17307",
        "ko": "20518"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 6,
    "percentage": 1
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 24,
    "percentage": 3
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 532,
    "percentage": 59
},
    "group4": {
    "name": "failed",
    "count": 340,
    "percentage": 38
},
    "meanNumberOfRequestsPerSecond": {
        "total": "14.787",
        "ok": "9.213",
        "ko": "5.574"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
