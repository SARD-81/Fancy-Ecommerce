import { v4 as uuidv4 } from "uuid";

const UuidGenerator = (number: number) => {
  const ids = Array.from({ length: number }, () => uuidv4());

  return ids;
};

export default UuidGenerator;
