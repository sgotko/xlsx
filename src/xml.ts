export class XmlBuilder {
  private constructor(public readonly root: XmlNode) {}

  public static root(root: string): XmlBuilder {
    return new XmlBuilder(new XmlNode(root));
  }

  public toString(): string {
    return this.root.toString();
  }
}

export type XmlAttribute = {
  name: string;
  value: string | number;
};

export class XmlNode {
  public readonly attributes: XmlAttribute[] = [];

  public readonly children: XmlNode[] = [];

  public constructor(private readonly name: string) {}

  /**
    @returns new added XmlNode
  */
  public child(name: string): XmlNode {
    const node = new XmlNode(name);
    this.children.push(node);
    return node;
  }

  /**
    @returns current XmlNode
  */
  public attribute(name: string, value: string | number): XmlNode {
    this.attributes.push({
      name,
      value,
    });
    return this;
  }
}

export class XmlWriter {
  public constructor(private readonly root: XmlNode) {}

  public write(): string {
    return "";
  }
}
