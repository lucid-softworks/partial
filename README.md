# @lucid-softworks/partial

Bind a function's leading argument tuple and retain precise types for the
remaining arguments.

```ts
import { partial } from "@lucid-softworks/partial";

const logInfo = partial(log, "info");
```
