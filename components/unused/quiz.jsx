import React from 'react';
import Quiz from '~/components/quiz/mdx';

const content = `
# این یک نمونه از ارزشیابی است
<MultiAnswer>
  <p>در این سوال شما باید فلان کنید.</p>
  <Answer question="Q1.1" label="فلان" type="number" />
  <Answer question="Q1.2"label="فلان" type="text" />
  <Answer question="Q1.3" label="فلان" type="text" />
</MultiAnswer>

<NumericRange />
`;

function QuizPage() {
  return <Quiz content={content} />;
}

export default QuizPage;
