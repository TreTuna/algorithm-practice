/**
 * https://www.interviewcake.com/question/javascript/cafe-order-checker
 * Given three arrays, write a function to check that my service is first-come, first-served. All food should come out in the same order customers requested it.
 * @param {[]} takeOutOrders
 * @param {[]} dineInOrders
 * @param {[]} servedOrders
 */

export function isFirstComeFirstServed(
  takeOutOrders,
  dineInOrders,
  servedOrders
) {
  if (takeOutOrders.length + dineInOrders.length !== servedOrders.length) {
    return false;
  }
  // Check if we're serving orders first-come, first-served
  // let ordersCorrect = true;
  let takeOutOrderIndex = 0;
  let dineInOrderIndex = 0;
  let currentOrderIndex = 0;

  while (currentOrderIndex <= servedOrders.length) {
    const currentOrder = servedOrders[currentOrderIndex];
    if (
      currentOrder !== takeOutOrders[takeOutOrderIndex] &&
      currentOrder !== dineInOrders[dineInOrderIndex]
    ) {
      return false;
    }
    if (currentOrder === takeOutOrders[takeOutOrderIndex]) {
      takeOutOrderIndex++;
    }
    if (currentOrder === dineInOrders[dineInOrderIndex]) {
      dineInOrderIndex++;
    }

    currentOrderIndex++;
  }

  return true;
}
