const input = document.getElementById("input");
const list = document.getElementById("list");

input.onkeyup = function (e) {
  const value = e.target.value;
  if (e.key === "Enter") {
    const li = `
      <li class="group p-4 flex items-center border border-t-1">
        <div class="w-10 h-10 mr-4 rounded-full border flex justify-center items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
        </div>
        <div class="flex justify-between flex-1">
          ${value}
          <svg data-todo="remove" class="hidden group-hover:block cursor-pointer hover:text-red-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/>
          </svg>
        </div>
      </li>`;
    list.insertAdjacentHTML("afterbegin", li);
    input.value = ""
  }
};
