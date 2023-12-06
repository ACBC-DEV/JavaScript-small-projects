import { ICountStates } from "../types/index";

export default function BarProgress({ count, initialCount }: ICountStates) {
  const widthProgress = 100 - (count / initialCount) * 100;
  console.log(widthProgress);
  return (
    <div class="h-2 bg-gray-200 rounded-full">
      <div
        class="h-full bg-green-500 rounded-full"
        style={{ width: `${widthProgress}%` }}
      ></div>
    </div>
  );
}
