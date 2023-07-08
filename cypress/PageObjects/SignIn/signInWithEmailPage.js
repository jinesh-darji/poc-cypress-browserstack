class SignInWithEmailPage {
  txtEmail = "//input[@placeholder='Enter you email']";
  btnSignin = "//button[text()='Sign in']";
  btnGoBack = "//p[text()='Go back']";

  get email() {
    return cy.xpath(this.txtEmail);
  }

  get signin() {
    return cy.xpath(this.btnSignin);
  }

  get goBack() {
    return cy.xpath(this.clickGoBack);
  }
}

let signinWithEmail = new SignInWithEmailPage();
export default signinWithEmail;
