const url = 'https://chatgpt-best-price.p.rapidapi.com/v1/chat/completions';

async function getCareerGuidance() {
    const params = new URLSearchParams(window.location.search);

    const data = {
        name: params.get('name'),
        age: params.get('age'),
        hobbies: params.get('hobbies'),
        skills: params.get('skills'),
        subject: params.get('subject'),
        careerInterest: params.get('careerInterest'),
        certification: params.get('certification'),
        goal: params.get('goal')
    };

    const requestBody = {
        model: 'gpt-3.5-turbo',
        messages: [
            {
                role: 'system',
                content: 'Hello! I\'m an AI assistant bot based on ChatGPT. How may I help you?'
            },
            {
                role: 'user',
                content: `You are a Career Guidance Coach for Indian students. Provide career guidance based on the following details:
1. Name: ${data.name}
2. Age: ${data.age}
3. Hobbies: ${data.hobbies}
4. Skills or Strengths: ${data.skills}
5. Subject of Interest: ${data.subject}
6. Career Interest: ${data.careerInterest}
7. Any Specific Certification Completed: ${data.certification}
8. Goal/Designation/What You Want to Become: ${data.goal}

Provide output in the following format:
1. Personalized Career Recommendations
2. Suggested Educational Paths
3. Relevant Courses and Certifications
4. Potential Colleges and Universities
5. Detailed Career Information
6. Job Market Trends and Opportunities
7. Related Exams
8. Internship and Job Opportunities
9. Skills Needed`
            }
        ]
    };

    const options = {
        method: 'POST',
        headers: {
            'x-rapidapi-key': 'ba585e7809msh2d35f179c3276a6p1efc77jsn6b938957c654',
            'x-rapidapi-host': 'chatgpt-best-price.p.rapidapi.com',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();

        // Assuming guidanceText is the response from the API
        // Assuming guidanceText is the response from the API
        const guidanceText = result.choices[0].message.content;

        // Splitting guidance text into sections based on a consistent pattern
        const sections = guidanceText.split(/\d+\.\s/);

        // Assigning each section to corresponding text area
        document.getElementById('recommendations').value = sections[1].trim();
        document.getElementById('educationPaths').value = sections[2].trim();
        document.getElementById('courses').value = sections[3].trim();
        document.getElementById('colleges').value = sections[4].trim();
        document.getElementById('careerInfo').value = sections[5].trim();
        document.getElementById('jobTrends').value = sections[6].trim();
        document.getElementById('exams').value = sections[7].trim();
        document.getElementById('internships').value = sections[8].trim();
        document.getElementById('skills').value = sections[9].trim();
    } catch (error) {
        console.error(error);
    }
}

window.onload = getCareerGuidance;
