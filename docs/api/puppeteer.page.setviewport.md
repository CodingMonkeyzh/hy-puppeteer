---
sidebar_label: Page.setViewport
---

# Page.setViewport() method

`page.setViewport` will resize the page. A lot of websites don't expect phones to change size, so you should set the viewport before navigating to the page.

In the case of multiple pages in a single browser, each page can have its own viewport size.

#### Signature:

```typescript
class Page {
  abstract setViewport(viewport: Viewport): Promise<void>;
}
```

## Parameters

| Parameter | Type                                | Description |
| --------- | ----------------------------------- | ----------- |
| viewport  | [Viewport](./puppeteer.viewport.md) |             |

**Returns:**

Promise&lt;void&gt;

## Remarks

NOTE: in certain cases, setting viewport will reload the page in order to set the isMobile or hasTouch properties.

## Example

```ts
const page = await browser.newPage();
await page.setViewport({
  width: 640,
  height: 480,
  deviceScaleFactor: 1,
});
await page.goto('https://example.com');
```
