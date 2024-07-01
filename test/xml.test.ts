import { XmlBuilder } from "../src/xml";

test("XmlBuilder test", () => {
  const builder: XmlBuilder = XmlBuilder.root("root");
  builder.root.child("a").attribute("name", "A").attribute("value", 10);
  expect(builder.root.children.length).toBe(1);
});
