import Highlight from '@tiptap/extension-highlight'
import Image from '@tiptap/extension-image'
import TextAlign from '@tiptap/extension-text-align'
import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { Redo, Undo } from 'lucide-react'
import { useState } from 'react'
import ImageUploaderDialog from './image-uploader-dialog'

const RichEditor = ({ content, onChange }) => {
	const [isDialogOpen, setIsDialogOpen] = useState(false)

	const editor = useEditor({
		extensions: [
			StarterKit,
			Image,
			Highlight,
			TextAlign.configure({
				types: ['heading', 'paragraph'],
			}),
		],
		content: content,
		onUpdate: ({ editor }) => {
			onChange(editor.getHTML())
		},
	})

	if (!editor) return null

	const handleInsertImage = url => {
		if (url) editor.chain().focus().setImage({ src: url }).run()
	}

	const addCenterAlign = () => {
		if (editor.isActive({ textAlign: 'center' })) {
			editor.chain().focus().unsetTextAlign().run()
		} else {
			editor.chain().focus().setTextAlign('center').run()
		}
	}

	return (
		<div className='border border-gray-300 rounded-md overflow-hidden bg-white'>
			{/* Toolbar - Faqat tugmalar shu yerda turadi */}
			<div className='bg-gray-100 p-2 border-b flex flex-wrap gap-2 items-center'>
				<button
					title='Undo'
					type='button'
					onClick={() => editor.chain().focus().undo().run()}
					className='px-2 py-1 border bg-white rounded text-sm hover:bg-gray-50 cursor-pointer'
				>
					<Undo />
				</button>
				<button
					title='Redo'
					type='button'
					onClick={() => editor.chain().focus().redo().run()}
					className='px-2 py-1 border bg-white rounded text-sm hover:bg-gray-50 cursor-pointer'
				>
					<Redo />
				</button>

				<div className='w-px h-6 bg-gray-300 mx-1' />

				<button
					type='button'
					onClick={() => editor.chain().focus().toggleBold().run()}
					className={`px-2 py-1 border rounded text-sm cursor-pointer ${editor.isActive('bold') ? 'bg-gray-300 font-bold' : 'bg-white'}`}
				>
					<b>B</b>
				</button>
				<button
					type='button'
					onClick={() => editor.chain().focus().toggleItalic().run()}
					className={`px-2 py-1 border rounded text-sm cursor-pointer ${editor.isActive('italic') ? 'bg-gray-300 italic' : 'bg-white'}`}
				>
					<i>italic</i>
				</button>
				<button
					type='button'
					onClick={() => editor.chain().focus().toggleStrike().run()}
					className={`px-2 py-1 border rounded text-sm cursor-pointer ${editor.isActive('strike') ? 'bg-gray-300 line-through' : 'bg-white'}`}
				>
					<del>S</del>
				</button>

				<div className='w-px h-6 bg-gray-300 mx-1' />

				<button
					type='button'
					onClick={() => editor.chain().focus().toggleBulletList().run()}
					className={`px-2 py-1 border rounded text-sm cursor-pointer ${editor.isActive('bulletList') ? 'bg-gray-300' : 'bg-white'}`}
				>
					List
				</button>

				<button
					type='button'
					onClick={() => editor.chain().focus().toggleHighlight().run()}
					className={`px-2 py-1 border rounded text-sm cursor-pointer ${editor.isActive('highlight') ? 'bg-gray-400 text-white' : 'bg-white'}`}
				>
					Highlight
				</button>

				<button
					type='button'
					onClick={addCenterAlign}
					className={`px-2 py-1 border rounded text-sm cursor-pointer ${editor.isActive({ textAlign: 'center' }) ? 'bg-gray-300' : 'bg-white'}`}
				>
					Center
				</button>

				<div className='w-px h-6 bg-gray-300 mx-1' />

				{/* Rasm tugmasi va Dialog linyasi */}
				<button
					type='button'
					onClick={() => setIsDialogOpen(true)}
					className='px-2 py-1 border bg-blue-50 text-blue-600 rounded cursor-pointer text-sm hover:bg-blue-100 transition-colors'
				>
					Rasm yuklash
				</button>

				<ImageUploaderDialog
					open={isDialogOpen}
					setOpen={setIsDialogOpen}
					onInsertImage={handleInsertImage}
				/>
			</div>

			{/* Haqiqiy Yozish maydoni - Faqat shu yerda bitta bo'lishi shart */}
			<EditorContent
				editor={editor}
				className='p-4 min-h-50 outline-none prose max-w-none focus:outline-none'
			/>
		</div>
	)
}

export default RichEditor
