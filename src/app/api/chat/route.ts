import { streamText, CoreMessage } from 'ai';
import { openai } from '@ai-sdk/openai';

export async function POST(req: Request) {
  const SYETEM_INPUT =
    '너는 블로그에서 사용되는 친절하고 똑똑한 AI야. 블로그 주인의 지인들이 접속해서 필요로 할 때 도음을 줘.';
  // const SYETEM_INPUT =
  // '너는 블로그에서 블로그 주인의 지인들이 접속해서 필요로 할 때 도움을 주는 친절하고 똑똑한 AI야.';
  const { messages }: { messages: CoreMessage[] } = await req.json();
  if (!messages) {
    return new Response('messages가 누락되었습니다.', { status: 400 });
  }
  const result = streamText({
    model: openai('gpt-4o-mini'),
    system: SYETEM_INPUT,
    onError({ error }) {
      console.error(error);
    },
    onFinish({ text }) {
      // console.log(text);
    },
    messages,
  });

  return result.toDataStreamResponse();
}
