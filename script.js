// Store student data directly in the script
const students = [
    { name: "Axmed Cali Maxamed", year: "2024/2025", course: "Computer Basics" },
    { name: "Amina Ahmed", year: "2024/2025", course: "Mathematics" }
];

document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const studentName = params.get('name');

    if (studentName) {
        const student = students.find(s => s.name === studentName);

        if (student) {
            document.getElementById('studentInfo').innerHTML = `
                <p><strong>Name:</strong> ${student.name}</p>
                <p><strong>Academic Year:</strong> ${student.year}</p>
                <p><strong>Course:</strong> ${student.course}</p>
            `;
            const studentImage = document.getElementById('studentImage');
            studentImage.src = `${student.name}.jpg`; // Ensure this matches the image file name
        } else {
            document.getElementById('studentInfo').innerHTML = '<p>Student not found.</p>';
        }
    } else {
        document.getElementById('studentInfo').innerHTML = '<p>No student name provided in the URL.</p>';
    }
});
