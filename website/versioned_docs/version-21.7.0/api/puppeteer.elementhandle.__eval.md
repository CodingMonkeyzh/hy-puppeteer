---
sidebar_label: ElementHandle.$$eval
---

# ElementHandle.$$eval() method

Runs the given function on an array of elements matching the given selector in the current element.

If the given function returns a promise, then this method will wait till the promise resolves.

#### Signature:

```typescript
class ElementHandle {
  $$eval<
    Selector extends string,
    Params extends unknown[],
    Func extends EvaluateFuncWith<
      Array<NodeFor<Selector>>,
      Params
    > = EvaluateFuncWith<Array<NodeFor<Selector>>, Params>,
  >(
    selector: Selector,
    pageFunction: Func | string,
    ...args: Params
  ): Promise<Awaited<ReturnType<Func>>>;
}
```

## Parameters

| Parameter    | Type           | Description                                                                                                                                                          |
| ------------ | -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| selector     | Selector       | The selector to query for.                                                                                                                                           |
| pageFunction | Func \| string | The function to be evaluated in the element's page's context. An array of elements matching the given selector will be passed to the function as its first argument. |
| args         | Params         | Additional arguments to pass to <code>pageFunction</code>.                                                                                                           |

**Returns:**

Promise&lt;Awaited&lt;ReturnType&lt;Func&gt;&gt;&gt;

A promise to the result of the function.

## Example

HTML:

```html
<div class="feed">
  <div class="tweet">Hello!</div>
  <div class="tweet">Hi!</div>
</div>
```

JavaScript:

```ts
const feedHandle = await page.$('.feed');
expect(
  await feedHandle.$$eval('.tweet', nodes => nodes.map(n => n.innerText))
).toEqual(['Hello!', 'Hi!']);
```
