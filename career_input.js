function submitForm() {
    const form = document.getElementById('careerForm');
    const formData = new FormData(form);

    const data = {
        name: formData.get('name'),
        age: formData.get('age'),
        hobbies: formData.get('hobbies'),
        skills: formData.get('skills'),
        subject: formData.get('subject'),
        careerInterest: formData.get('careerInterest'),
        certification: formData.get('certification'),
        goal: formData.get('goal')
    };

    const queryString = new URLSearchParams(data).toString();
    window.location.href = 'career_output.html?' + queryString;
}
