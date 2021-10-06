/**
 * @jest-environment jsdom
 */

import Test from "./TestApp.svelte";
import {
  render,
  cleanup,
  fireEvent,
  waitForElement
} from "@testing-library/svelte";
import "@testing-library/jest-dom/extend-expect";

afterEach(cleanup);

describe("App", () => {
  test("should render greeting", () => {
    const { getByText } = render(Test, { props: { name: "world" } });

    expect(getByText("Hello world!"));
  });

  test("should change button text after click", async () => {
    const { getByText } = render(Test, { props: { name: "world" } });

    fireEvent.click(getByText("Button Text"));

    // const button = await waitForElement(() => getByText("Button Clicked"));
    const button = await waitFor(() => getByText("Button Clicked"));

    expect(button).toBeInTheDocument();
  });
});
