document.addEventListener("DOMContentLoaded", function () {
  const conferenceData = {
    papers: `
session_Num,title,speaker
1, Machine learning: Trends, perspectives, and prospects, M. I. JORDAN
1, Advances in natural language processing, JULIA HIRSCHBERG
1, Adaptive Cluster Sampling, Steven K. Thompson
1, Sample Size for Estimating Multinomial Proportions, Steven K. Thompson
1, An empirical comparison of supervised learning algorithms, Rich Caruana
1, Predicting good probabilities with supervised learning, Rich Caruana
1, Supervised Learning of Probability Distributions by Neural Networks, Eric Baum
1, A Minimax Approach to Supervised Learning, Farzan Farnia
1, LayoutLMv3: Pre-training for Document AI with Unified Text and Image Masking, Yupan Huang
1, Image Preprocessing for Efficient Training of YOLO Deep Learning Networks, Young-Guk Ha
2, Game Theory for Cyber Security and Privacy, Kevin A. Kwiat
2, Cyber security: Threats and Challenges, Galya Pavlova
2, Malware Detection and Security Analysis Capabilities in a Continuous Integration, Wahab Almuhtadi
2, Computer Crimes, Computer Security and Computer Law, Yuri Baturin
2, STEM for Public Safety in Cyber: Training for Local Law Enforcement and Cyber Security, Michael Losavio
2, Evaluating the cyber security readiness of organizations and its influence on performance, Shaikha Hasan
2, Using Bayesian networks for cyber security analysis, Peng Xie
2, Cyber security and the Leviathan, Joseph Da Silva
2, Egida: Automated security configuration deployment systems with early error detection, Antonio Paya
2, Flexible software protection, Jens Van den Broeck
3, Innovative approaches for cancer treatment: current perspectives and new challenges, Carlotta Pucci
3, Nano-Based Approved Pharmaceuticals for Cancer Treatment: Present and Future Challenges, Francisco Rodrígues
3, Early detection of cancer, DAVID CROSBY
3, AI in health and medicine, Pranav Rajpurkar
3, The adolescence of AI in Medicine: Will the field come of age in the '90s?, Edward H. Shortliffe
3, Chronic kidney disease and diabetes, Ronald Pyram
3, Epidemiology of Alzheimer disease, Christiane Reitz
3, Microdevices in Medicine, Dennis L. Polla
3, Introduction to artificial intelligence in medicine, Yoav Mintz
3, Machine and deep learning for workflow recognition during surgery, Nicolas Padoy
4, Social Media: Defining, Developing, and Divining, Caleb T. Carr
4, instagram: the impact of number of followers and product divergence on brand attitude, Marijke De Veirman
4, Predicting the Future with Social Media, Sitaram Asur
4, The COVID-19 social media infodemic, Ana Lucia Schmidt
4, Brand strategies in social media, Georgios Tsimonis
4, New Perspectives on Gender, Bertrand Marianne
4, Labor supply and gender differences in occupational choice, Elisa Keller
4, The career dynamics of high-skilled women and men: Evidence from Sweden, James Albrecht
4, Gender differences in the benefits of an influential early childhood program, Jorge Luis García
4, Early gender gaps among university graduates, Marco Francesconi
    `
  };

  const { papers } = conferenceData;

  // Parse the CSV content
  const rows = papers.trim().split("\n").map((row) => row.split(","));

  const schedule = rows.slice(1).map((row) => ({
    session: row[0],
    title: row[1],
    speaker: row[2],
  }));

  const tbody = document.querySelector("#scheduleTable tbody");
  schedule.forEach((item) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td>${item.session}</td><td>${item.title}</td><td>${item.speaker}</td>`;
    tbody.appendChild(tr);
  });
});

function downloadSchedule() {
  const conferenceData = {
    papers: `
session_Num,title,speaker
1, Machine learning: Trends, perspectives, and prospects, M. I. JORDAN
1, Advances in natural language processing, JULIA HIRSCHBERG
1, Adaptive Cluster Sampling, Steven K. Thompson
1, Sample Size for Estimating Multinomial Proportions, Steven K. Thompson
1, An empirical comparison of supervised learning algorithms, Rich Caruana
1, Predicting good probabilities with supervised learning, Rich Caruana
1, Supervised Learning of Probability Distributions by Neural Networks, Eric Baum
1, A Minimax Approach to Supervised Learning, Farzan Farnia
1, LayoutLMv3: Pre-training for Document AI with Unified Text and Image Masking, Yupan Huang
1, Image Preprocessing for Efficient Training of YOLO Deep Learning Networks, Young-Guk Ha
2, Game Theory for Cyber Security and Privacy, Kevin A. Kwiat
2, Cyber security: Threats and Challenges, Galya Pavlova
2, Malware Detection and Security Analysis Capabilities in a Continuous Integration, Wahab Almuhtadi
2, Computer Crimes, Computer Security and Computer Law, Yuri Baturin
2, STEM for Public Safety in Cyber: Training for Local Law Enforcement and Cyber Security, Michael Losavio
2, Evaluating the cyber security readiness of organizations and its influence on performance, Shaikha Hasan
2, Using Bayesian networks for cyber security analysis, Peng Xie
2, Cyber security and the Leviathan, Joseph Da Silva
2, Egida: Automated security configuration deployment systems with early error detection, Antonio Paya
2, Flexible software protection, Jens Van den Broeck
3, Innovative approaches for cancer treatment: current perspectives and new challenges, Carlotta Pucci
3, Nano-Based Approved Pharmaceuticals for Cancer Treatment: Present and Future Challenges, Francisco Rodrígues
3, Early detection of cancer, DAVID CROSBY
3, AI in health and medicine, Pranav Rajpurkar
3, The adolescence of AI in Medicine: Will the field come of age in the '90s?, Edward H. Shortliffe
3, Chronic kidney disease and diabetes, Ronald Pyram
3, Epidemiology of Alzheimer disease, Christiane Reitz
3, Microdevices in Medicine, Dennis L. Polla
3, Introduction to artificial intelligence in medicine, Yoav Mintz
3, Machine and deep learning for workflow recognition during surgery, Nicolas Padoy
4, Social Media: Defining, Developing, and Divining, Caleb T. Carr
4, instagram: the impact of number of followers and product divergence on brand attitude, Marijke De Veirman
4, Predicting the Future with Social Media, Sitaram Asur
4, The COVID-19 social media infodemic, Ana Lucia Schmidt
4, Brand strategies in social media, Georgios Tsimonis
4, New Perspectives on Gender, Bertrand Marianne
4, Labor supply and gender differences in occupational choice, Elisa Keller
4, The career dynamics of high-skilled women and men: Evidence from Sweden, James Albrecht
4, Gender differences in the benefits of an influential early childhood program, Jorge Luis García
4, Early gender gaps among university graduates, Marco Francesconi
    `
  };

  const { papers } = conferenceData;
  const rows = papers.trim().split("\n").map((row) => row.split(","));

  const schedule = [
    ["session_Num", "title", "speaker"],
    ...rows.slice(1).map((row) => [
      row[0],
      row[1],
      row[2],
    ]),
  ];

  let csvContent =
    "data:text/csv;charset=utf-8," +
    schedule.map((e) => e.join(",")).join("\n");

  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", "conference_schedule.csv");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
