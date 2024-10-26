"use client"
import React, { useState } from 'react'
import TextEditor from '../TextEditor'
import { VideoIcon } from '../icons'
interface Props {

}

const QuestionThread: React.FC<Props> = (props) => {
  const { } = props
  const [values, setValues] = useState<{
    topic: string | null,
    detail: string | null
  }>({ topic: null, detail: null })

  const handleInputChange = (name: string, value: string) => {
    setValues((prev) => ({ ...prev, [name]: value }))

  }
  console.log('values----->>>>>', values);

  return (
    <div>
      <h4 className='text_bold flex items-center gap-[24px] text-[24px]'><VideoIcon /> คอร์สของฉัน</h4>
      <div className={`w-full h-[500px] flex flex-col mt-[37px] px-[49px] py-[42px] mb-[40px]`} style={{
        boxShadow: "0px 0px 12px 0px #0000000A",
        borderRadius: '24px',
        background:'#FFFFFF'
      }}>
        <h4 className='text_bold flex items-center gap-[24px] text-[20px]'>หัวข้อกระทู้</h4>
        <div className='h-[50px] mt-[12px]'>
          <input
            type="text"
            className="flex-grow pl-[26px] pr-4 py-2 border border-gray-300 rounded-[12px] w-full"
            placeholder="หัวข้อกระทู้"
            id="topic"
            value={values?.topic || ''}
            onChange={(e) => { handleInputChange(e.target.id, e.target.value) }}
          />
        </div>
        <br />
        <h4 className='text_bold flex items-center gap-[24px] text-[20px]'>เนื้อหา</h4>
        <TextEditor onChange_={handleInputChange} values={values?.detail || ''} />
      </div>
    </div>
  )
}

export default React.memo<Props>(QuestionThread)
