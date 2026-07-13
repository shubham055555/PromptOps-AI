export default function TypingIndicator() {

  return (

    <div className="flex items-center gap-2 text-zinc-400">

      <span className="h-2 w-2 animate-bounce rounded-full bg-zinc-400"></span>

      <span
        className="h-2 w-2 animate-bounce rounded-full bg-zinc-400"
        style={{ animationDelay: "0.2s" }}
      ></span>

      <span
        className="h-2 w-2 animate-bounce rounded-full bg-zinc-400"
        style={{ animationDelay: "0.4s" }}
      ></span>

      <span className="ml-2">

        AI is typing...

      </span>

    </div>

  );

}