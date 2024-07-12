/**
 * Returns a string joined by a space, filtered out falsey values from given classes array.
 * @param {...(false|null|undefined|string)[]} classes - An iterable array of classes to be joined and filtered.
 * @returns {string} A string resulting from joining the filtered array elements with a space.
 */
export default function classNames(...classes: (false | null | undefined | string)[]): string {
  return classes.filter(Boolean).join(" ");
}
