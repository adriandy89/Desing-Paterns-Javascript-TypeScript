class FormBuilder {
  constructor() {
    this.form = [];
  }
  addTextField(name, label) {
    this.form.push({ name, label, type: "text" });
    return this;
  }
  addNumberField(name, label) {
    this.form.push({ name, label, type: "number" });
    return this;
  }
  addMultiSelectField(name, label, options) {
    this.form.push({ name, label, type: "multi-select", options });
    return this;
  }
  getResult() {
    return this.form;
  }
}
describe("FormBuilder", () => {
  it("should build the form correctly", () => {
    const form = new FormBuilder()
      .addTextField("name", "Name")
      .addNumberField("age", "Age")
      .addMultiSelectField("interests", "Interests", [
        "Sports",
        "Music",
        "Reading",
      ])
      .getResult();
    // Verify the structure of the form
    if (Array.isArray(form)) {
      console.log("Form created successfully!");
    } else {
      console.log("Error in form creation!");
    }
    // Verify the fields of the form
    form.forEach((field) => {
      if (field.hasOwnProperty("label") && field.hasOwnProperty("type")) {
        console.log(`Field: ${field.label}, Type: ${field.type}`);
      } else {
        console.log("Error in field structure!");
      }
    });
  });
})();
