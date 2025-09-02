class JoinCoursePage {
  typeCourseCode(v) { cy.get('[data-testid="course-code"]').clear().type(v); }
  typeCoursePassword(v) { cy.get('[data-testid="course-password"]').clear().type(v); }
  join() { cy.get('[data-testid="join-btn"]').click(); }
}
export default new JoinCoursePage();
