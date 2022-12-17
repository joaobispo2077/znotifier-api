export type Replace<
  OriginaObject extends object = object,
  KeysFromOriginalObject extends object = object,
> = Omit<OriginaObject, keyof KeysFromOriginalObject> & KeysFromOriginalObject;
