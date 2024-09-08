function generateResume() {
    // Get form values
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const phone = document.getElementById('phone').value;
    const objective = document.getElementById('objective').value;
    const fatherName = document.getElementById('fatherName').value;
    const cnic = document.getElementById('cnic').value;
    const dob = document.getElementById('dob').value;
    const gender = document.getElementById('gender').value;
    const religion = document.getElementById('religion').value;
    const maritalStatus = document.getElementById('maritalStatus').value;
    const nationality = document.getElementById('nationality').value;
    const languages = document.getElementById('languages').value;
    const education = document.getElementById('education').value;
    const experience = document.getElementById('experience').value;

    // Generate resume content
    const resumeContent = `
        <div class="header">
            <h1><span>C</span>V</h1>
        </div>
        <div class="name">${name}</div>
        <div class="contact-info">
            <p>Address: ${address}</p>
            <p>Cell No: ${phone}</p>
        </div>
        <div class="section-title">CAREER OBJECTIVE:</div>
        <div class="content">
            <p>${objective}</p>
        </div>
        <div class="section-title">PERSONAL INFORMATION:</div>
        <div class="content">
            <p><span class="label">Father's Name</span>: ${fatherName}</p>
            <p><span class="label">CNIC</span>: ${cnic}</p>
            <p><span class="label">Date of Birth</span>: ${new Date(dob).toLocaleDateString()}</p>
            <p><span class="label">Gender</span>: ${gender}</p>
            <p><span class="label">Religion</span>: ${religion}</p>
            <p><span class="label">Marital Status</span>: ${maritalStatus}</p>
            <p><span class="label">Nationality</span>: ${nationality}</p>
            <p><span class="label">Languages</span>: ${languages}</p>
        </div>
        <div class="section-title">ACADEMIC QUALIFICATION:</div>
        <div class="content">
            <p><span class="label">Matriculation</span>: ${education}</p>
        </div>
        <div class="section-title">EXPERIENCE:</div>
        <div class="content">
            <p>${experience}</p>
        </div>
        <div class="section-title">REFERENCE:</div>
        <div class="content">
            <p>Will be furnished upon request.</p>
        </div>
    `;

    // Display resume
    document.getElementById('resumeOutput').innerHTML = resumeContent;
}
