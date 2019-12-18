import React from 'react';
import Quiz from '~/components/quiz/mdx';

const content = `
# این یک نمونه از ارزشیابی است
<MultiAnswer>
  <p>در این سوال شما باید فلان کنید.</p>
  <Answer label="فلان" type="number" />
  <Answer label="فلان" type="text" />
  <Answer label="فلان" type="text" />
</MultiAnswer>

<NumericRange />
`;

function QuizPage() {
  return <Quiz content={content} />;
}

export default QuizPage;
