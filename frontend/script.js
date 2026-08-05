async function getStudents() {
  const response = await fetch("http://localhost:5000/students");

  const students = await response.json();

  const list = document.getElementById("students");

  list.innerHTML = "";

  students.forEach((student) => {
    list.innerHTML += `
            <li>
                ${student.name}
                (${student.department})
            </li>`;
  });
}
