// components/TextEditor.tsx
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

interface Props {
  onChange_: Function
  values: string
}

const TextEditor: React.FC<Props> = (props) => {
  const { onChange_,values } = props
  const [editorHtml, setEditorHtml] = useState<string>('');

  const handleEditorChange = (html: string) => {
    onChange_('detail', html)
  };

  return (
    <div>
      <ReactQuill
        value={values}
        onChange={handleEditorChange}
        className='h-[200px]'
        modules={{
          toolbar: [
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

            [{ 'font': [] }],

            ['bold', 'italic', 'underline', 'strike', 'blockquote'],        // toggled buttons

            [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }, { 'align': [] }],

            ['link'],
          ]
        }}
      />
    </div>
  );
};

export default React.memo<Props>(TextEditor);
