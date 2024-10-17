import { useEffect, useState } from 'react';
import style from './style.module.css';
import { useDataContext } from '../../context/data-context';

const NoteWritable = ({
  content,
  setContent,
}: {
  content: string;
  setContent: (value: string) => void;
}) => {
  return (
    <textarea
      value={content}
      onChange={(e) => {
        setContent(e.target.value);
      }}
      className={style.writable}
      spellCheck="false"
    ></textarea>
  );
};

const TextArea = () => {
  const [content, setContent] = useState<string>('');
  const { modifyNoteContent, selectedNote } = useDataContext();

  useEffect(() => {
    setContent(selectedNote?.content ?? '');
  }, [selectedNote]);

  return (
    <div className={style.layout}>
      <button onClick={() => modifyNoteContent(content)}>Test</button>
      <NoteWritable content={content} setContent={setContent} />
    </div>
  );
};

export default TextArea;
