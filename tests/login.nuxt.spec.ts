// @noErrors
import { it, expect, describe } from "vitest";
import { mountSuspended } from "@nuxt/test-utils/runtime";
import { CustomerLogin } from "#components";

describe("CustomerLogin.vue", () => {
  it("renders whatsapp input and button", async () => {
    const component = await mountSuspended(CustomerLogin);
    expect(component.find('[data-test="whatsapp-input"]').exists()).toBe(true);
    expect(component.find('[data-test="whatsapp-btn"]').exists()).toBe(
      true
    );
  });

  it("update the whatsapp value on input", async () => {
    const component = await mountSuspended(CustomerLogin);
    const input = component.find('[data-test="whatsapp-input"]');
    input.setValue("21999999999");

    expect((input.element as HTMLInputElement).value).toBe("21999999999");
  });

  it("event dispatcher on click agendar", async () => {
    const component = await mountSuspended(CustomerLogin);
    const whatsappNumber = "21999999999"
    const input = component.find('[data-test="whatsapp-input"]');
    await input.setValue(whatsappNumber);
    const form = component.find('[data-test="whatsapp-form"]')
    await form.trigger('submit')
    expect(component.emitted('submit')![0]).toEqual(whatsappNumber)
    
  });
});
