class DashboardPage {
  courseTitle() { return cy.get('[data-testid="course-title"]'); }
  startButton() { return cy.get('[data-testid="start-course"]'); }
  toast() { return cy.get('[data-testid="toast"]'); }
}
export default new DashboardPage();
