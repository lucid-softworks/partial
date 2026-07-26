# @lucid-softworks/partial

Bind a function's leading argument tuple and retain precise types for the
remaining arguments.

```ts
import { partial } from "@lucid-softworks/partial";

const log = (level: string, message: string) =>
  console.log(`[${level}] ${message}`);
const logInfo = partial(log, "info");
logInfo("Started");
```
