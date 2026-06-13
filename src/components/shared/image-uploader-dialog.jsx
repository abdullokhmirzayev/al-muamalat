import { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const ImageUploaderDialog = ({ open, setOpen, onInsertImage }) => {
  const [url, setUrl] = useState('');

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    if (file) {
      // Faylni local URL ga o'tkazish (yoki serverga yuborish uchun FileReader ishlating)
      const imageUrl = URL.createObjectURL(file);
      onInsertImage(imageUrl);
      setOpen(false);
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ 
    onDrop, 
    accept: { 'image/*': [] },
    maxSize: 5 * 1024 * 1024 // 5MB
  });

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader><DialogTitle>Rasm qo'shish</DialogTitle></DialogHeader>
        
        <Input 
          placeholder="Rasm URL manzilini kiriting..." 
          value={url} 
          onChange={(e) => setUrl(e.target.value)} 
        />

        <div {...getRootProps()} className={`border-2 border-dashed p-6 text-center cursor-pointer ${isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300'}`}>
          <input {...getInputProps()} />
          <p>{isDragActive ? "Faylni tashlang..." : "Drag and Drop: Faylni shu yerga tashlang yoki tanlang (Max 5MB)"}</p>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={() => setOpen(false)}>Bekor qilish</Button>
          <Button onClick={() => { onInsertImage(url); setOpen(false); }}>Qo'shish</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ImageUploaderDialog;