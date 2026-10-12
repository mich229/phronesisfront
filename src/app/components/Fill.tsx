import { isTodo } from "../data/legal";

export default function Fill({ v }: { v: string }) {
  return isTodo(v) ? (
    <mark className="rounded bg-yellow-200 px-1 text-yellow-900">{v}</mark>
  ) : (
    <>{v}</>
  );
}