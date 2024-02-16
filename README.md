# WAPH-Web Application Programming and Hacking

## Instructor: Dr. Phu Phung

## Student

**Name**: Tejeswar Reddy Nalijeni

**Email**: nalijety@mail.uc.edu

**Short-bio**: Currently I am pursuing Master's in Information Technology and I am interested in Cybersecurity

![Tejeswar](Tejeswar.jpg)

# Individual Project 1
## Front-end Web Development with a Professional Profile Website on github.io cloud service

## Overview and Requirements 

In this project, I'm honing my front-end web development skills by crafting a Professional Profile Website. Leveraging the github.io cloud service, I'm not only showcasing my expertise but also gaining practical experience in deployment. The project entails meeting both general and technical requisites, from setting up github.io to implementing Bootstrap for a polished portfolio display. JavaScript functionalities are seamlessly integrated to enhance user interaction. At the heart of the website lies the index.html page, meticulously designed with seven tabs catering to various facets of my professional journey. These tabs cover essential sections such as about me, experience, education, skills, interests, certifications, and explore more which provides visitors with a comprehensive overview of my profile.

Link to the repository:
[https://github.com/nalijety/nalijety.github.io/blob/main/README.md](https://github.com/nalijety/nalijety.github.io/blob/main/README.md)

Link to the portfolio:
[https://nalijety.github.io/index.html](https://nalijety.github.io/index.html)

### General Requirements
 -I've started my personal website, "nalijety.github.io," with just basic details about me and no fancy design yet. It's like a starting point for me to make it look better and add more cool stuff later on. I'll be adding style and more features to make it a nice place to show off my skills and what I've done.
 [https://nalijety.github.io/resume.html](https://nalijety.github.io/resume.html)

 ![Resume](Resume.png)

- I have added a "Coursework" section to the index.html page under the "Explore Me" tab, showcasing all the work completed thus far in the WAPH course. This section features contains PDFs of all the lab reports and hackathon submissions, providing a comprehensive overview of my progress and achievements in the course. Users can easily access and review the coursework materials directly from the website.

![Course Work Page](waph.png)
 ​
### Non-Technical Requirements
- I've integrated an open-source Bootstrap template into my portfolio, complete with a page tracker for enhanced navigation. Within the Portfolio section, I've meticulously crafted sections tailored to highlight my profile for job applications. These sections encompass crucial areas such as about me, work experience, education background, skillset, personal interests, certifications earned, and a Explore more section for additional details. This comprehensive approach ensures that potential employers can easily access and evaluate my qualifications and suitability for roles.

![BootStrap](index1.png)

- The next thing I added is that "Flag Counter" page tracker google analytics is used which helps to track the visitors number with location and device.

```JS
<script async src="https://www.googletagmanager.com/gtag/js?id=G-Z3PFRKP3DC"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        gtag('js', new Date());

        gtag('config', 'G-Z3PFRKP3DC');
    </script>
```
![Page Tracker](part3.png)

### Technical requirements (50 pts)​

#### Basic JavaScript code (20 pts)​

+ Use jQuery and one more open-source JavaScript framework/library​ to implement JavaScript code introduced in Lab 2, including, a digital clock; an analog clock; show/hide your email; and one more functionality of your choice. **(5 pts each)**

+ Two public Web APIs integration (20 pts)​

1. Integrate the jokeAPI ([https://v2.jokeapi.dev/joke/Any](https://v2.jokeapi.dev/joke/Any), similar to Lab 2.2.d.i) with Any category of joke to display a new joke in your page every 1 minute

2. Integrate a public API with graphics. Examples: [https://xkcd.com/info.0.json](https://xkcd.com/info.0.json), [https://www.weatherbit.io](https://www.weatherbit.io).

+ Use JavaScript cookies to remember the client (10 pts): If first-time visit, display a message "Welcome to my homepage!", otherwise, display a message "Welcome back! Your last visit was <the date/time of last visit>"


## Report

You can write a report using Markdown format or any Word processor, i.e., you do not need to use Markdown to write your report. Your report should follow the template/outline provided in Lecture 2 ([https://github.com/phungph-uc/waph/blob/main/README-template.md](https://github.com/phungph-uc/waph/blob/main/README-template.md)) which should include the course name and instructor, your name and email together with your headshot (150x150 pixels), and sub-sections of the assignment's overview, and each task and sub-task.

There should be an overview sub-section where you must write an overview of the assignment and the outcomes you learned from it. Include your website's clickable URL deployed on `github.io`. Also, include a direct clickable link to the project folder on GitHub.com so that it can be viewed when grading, for example, [https://github.com/phungph-uc/waph-phungph/tree/main/individual-project1](https://github.com/phungph-uc/waph-phungph/tree/main/individual-project1).

For each sub-task, write a brief summary of how you complete it. You are welcome to include code snippets and screenshots to demonstrate the outcome, however, they are not required. **Please note that demo screenshots must include your virtual machine name or your name with proper captions and be visible, i.e., in high resolution, not too blurry or with much blank space, for grading**. 

Your report must be exported in  PDF with contents and screenshots are correctly rendered in proper order. The PDF file should be named `your-username-waph-project1.pdf`, e.g., `phungph-waph-project1.pdf`, and uploaded to Canvas to submit by the deadline. 


## Deliverables and Submission

You need to submit **three** deliverables in PDF files for grading:

+ Your report mentioned above.

+ Your deployed website printed from a browser in PDF.

+  The source code of your deployed website printed from a browser in PDF.
