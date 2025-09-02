import Login from "../pageObjects/LoginPage";
import Join from "../pageObjects/JoinCoursePage";
import Dashboard from "../pageObjects/DashboardPage";

describe("Course Flow Tests", () => {

  // Positive Case
  describe("Login & Join course - success", () => {
    it("logs in and joins course successfully", () => {
      cy.fixture("users").then(({ validUser }) => {
        cy.fixture("courses").then(({ validCourse }) => {
          Login.visit();
          Login.typeEmail(validUser.email);
          Login.typePassword(validUser.password);
          Login.submit();

          Join.typeCourseCode(validCourse.code);
          Join.typeCoursePassword(validCourse.password);
          Join.join();

          Dashboard.courseTitle().should("contain.text", validCourse.code);
          Dashboard.startButton().should("be.visible").and("be.enabled");
        });
      });
    });
  });

  // Negative Case
  describe("Join course - invalid details", () => {
    it("shows error when course code/password is wrong", () => {
      cy.fixture("users").then(({ validUser }) => {
        cy.fixture("courses").then(({ invalidCourse }) => {
          Login.visit();
          Login.typeEmail(validUser.email);
          Login.typePassword(validUser.password);
          Login.submit();

          Join.typeCourseCode(invalidCourse.code);
          Join.typeCoursePassword(invalidCourse.password);
          Join.join();

          Dashboard.toast().should("be.visible")
            .and("contain.text", "Invalid course code or password");
          Dashboard.startButton().should("not.exist");
        });
      });
    });
  });

  // Start Button Visibility
  describe("Start button visibility rule", () => {
    it("does NOT show Start button before joining", () => {
      cy.fixture("users").then(({ validUser }) => {
        Login.visit();
        Login.typeEmail(validUser.email);
        Login.typePassword(validUser.password);
        Login.submit();

        Dashboard.startButton().should("not.exist");
      });
    });
  });

  // Edge Case
  describe("Edge case - email not verified", () => {
    it("blocks actions until email is verified", () => {
      cy.fixture("users").then(({ unverifiedUser }) => {
        Login.visit();
        Login.typeEmail(unverifiedUser.email);
        Login.typePassword(unverifiedUser.password);
        Login.submit();

        Dashboard.toast().should("be.visible")
          .and("contain.text", "Please verify your email");
        Dashboard.startButton().should("not.exist");
      });
    });
  });

});
