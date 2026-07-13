import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import CopyButton from "./CopyButton";

export default function MessageBubble({ message }) {

  const isUser = message.role === "user";

  return (

    <div
      className={`mb-6 flex ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >

      <div
        className={`max-w-4xl rounded-2xl p-5 ${
          isUser
            ? "bg-blue-600 text-white"
            : "bg-zinc-900 border border-zinc-800 text-zinc-200"
        }`}
      >

        <div className="mb-4 flex items-center justify-between">

          <h3 className="font-bold">

            {isUser ? "You" : "Gemini"}

          </h3>

          {!isUser && (

            <CopyButton text={message.content} />

          )}

        </div>

        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            code({
              inline,
              className,
              children,
              ...props
            }) {

              const match = /language-(\w+)/.exec(
                className || ""
              );

              return !inline && match ? (

                <SyntaxHighlighter
                  style={oneDark}
                  language={match[1]}
                  PreTag="div"
                  {...props}
                >

                  {String(children).replace(/\n$/, "")}

                </SyntaxHighlighter>

              ) : (

                <code
                  className={className}
                  {...props}
                >

                  {children}

                </code>

              );

            },
          }}
        >

          {message.content}

        </ReactMarkdown>

      </div>

    </div>

  );

}