function questionName(input) {
  const roles = ["admin", "editor", "viewer", "tester", "manager"];
  const totalUsers = 8;

  var counter = 0;
  let result = "";

  for (let i = 1; i <= totalUsers; i++) {
    counter++;

    let id = "USR-" + String(i).padStart(4, "0");
    let name = "TestUser_" + i;
    let email = "testuser" + i + "@testingacademy.com";
    let role = roles[(i - 1) % roles.length];

    let status = (i % 3 === 0) ? "INACTIVE" : "ACTIVE";

    result += `${id} | ${name} | ${email} | ${role} | ${status} `;

    if (i !== totalUsers) {
      result += "";
    }
  }

  return result.trim();
}