var interviewEligibility = function (gradeScore,hscScore,sscScore,candidateName) {
    if (gradeScore>=70 || hscScore>=80 || sscScore>90) {
        console.log(`${candidateName}, Congrates You are eligible for TCS interview`);
    }else
    {
        console.log(`Unfortunately ${candidateName} You are not eligible for interview`);
    }
    
}
interviewEligibility(80,86,90,"Aishwarya");
interviewEligibility(70,65,55,"Barti");
interviewEligibility(60,79,88,"Abhishek");
