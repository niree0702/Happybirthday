function addEducation() {
  const eduSection = document.getElementById("educationSection");
  const div = document.createElement("div");
  div.classList.add("edu-item", "mb-2");
  div.innerHTML = `
    <input type="text" class="form-control mb-1" placeholder="Degree" name="degree" />
    <input type="text" class="form-control mb-1" placeholder="College" name="college" />
    <input type="text" class="form-control mb-1" placeholder="Year" name="gradYear" />
  `;
  eduSection.appendChild(div);
}

function addExperience() {
  const expSection = document.getElementById("experienceSection");
  const div = document.createElement("div");
  div.classList.add("exp-item", "mb-2");
  div.innerHTML = `
    <textarea class="form-control mb-1" placeholder="Experience" name="experience"></textarea>
  `;
  expSection.appendChild(div);
}

function generateResume() {
  // Personal Info
  document.getElementById("previewName").textContent = document.getElementById("name").value;
  document.getElementById("previewEmail").textContent = document.getElementById("email").value;
  document.getElementById("previewPhone").textContent = document.getElementById("phone").value;
  document.getElementById("previewLinkedin").textContent = document.getElementById("linkedin").value;
  function generateResume() {
  // Existing logic here...

  // Apply selected template style
  const template = document.getElementById("templateSelect").value;
  const preview = document.getElementById("resumePreview");
  preview.classList.remove("template-modern", "template-classic");
  preview.classList.add(`template-${template}`);
}

  // Education Preview
  const eduItems = document.querySelectorAll("#educationSection .edu-item");
  let eduHTML = "";
  eduItems.forEach(item => {
    const degree = item.querySelector('input[name="degree"]').value;
    const college = item.querySelector('input[name="college"]').value;
    const year = item.querySelector('input[name="gradYear"]').value;
    eduHTML += `<p><strong>${degree}</strong>, ${college} (${year})</p>`;
  });
  document.getElementById("previewEducation").innerHTML = eduHTML;

  // Experience Preview
  const expItems = document.querySelectorAll("#experienceSection .exp-item");
  let expHTML = "<ul>";
  expItems.forEach(item => {
    const exp = item.querySelector('textarea[name="experience"]').value;
    expHTML += `<li>${exp}</li>`;
  });
  expHTML += "</ul>";
  document.getElementById("previewExperience").innerHTML = expHTML;
}function generateResume() {
  document.getElementById("previewName").textContent = document.getElementById("name").value;
  document.getElementById("previewEmail").textContent = document.getElementById("email").value;
  document.getElementById("previewPhone").textContent = document.getElementById("phone").value;
  document.getElementById("previewLinkedin").textContent = document.getElementById("linkedin").value;

  document.getElementById("previewDegree").textContent = document.getElementById("degree").value;
  document.getElementById("previewCollege").textContent = document.getElementById("college").value;
  document.getElementById("previewGradYear").textContent = document.getElementById("gradYear").value;

  document.getElementById("previewExperience").textContent = document.getElementById("experience").value;
}

function downloadPDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  doc.html(document.getElementById("resumePreview"), {
    callback: function (pdf) {
      pdf.save("my_resume.pdf");
    },
    x: 10,
    y: 10
  });
}