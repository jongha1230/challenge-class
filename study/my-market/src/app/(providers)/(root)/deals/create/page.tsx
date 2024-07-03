"use client";
import Button from "@/components/Button";
import Input from "@/components/Input";
import Page from "@/components/Page";
import { supabase } from "@/contexts/supabase.context";
import { nanoid } from "nanoid";
import { useState } from "react";

function CreateDealPage() {
  const [content, setContent] = useState("");
  const [image, setImage] = useState<File | null>(null);

  const handleClickCreate = async () => {
    try {
      const {
        data: { user },
        error: userError,
      } = await supabase.auth.getUser();

      if (userError) throw new Error(userError.message);
      if (!user) return;

      if (!image) return;

      const extension = image.name.split(".").slice(-1)[0];
      const filename = nanoid() + "." + extension;
      const response = await supabase.storage
        .from("deals")
        .upload(`public/${filename}`, image);

      if (response.error) throw new Error(response.error.message);
      if (!response.data) return;

      const imageURL = supabase.storage
        .from("deals")
        .getPublicUrl(`public/${filename}`).data.publicUrl;

      console.log(content, imageURL, user.id);
      const { data, error } = await supabase
        .from("deals")
        .insert([{ content, imageURL, sellerId: user.id }]);

      if (error) throw new Error(error.message);

      console.log("Data inserted:", data);
    } catch (error) {
      console.error("Error creating deal:");
    }
  };

  return (
    <Page title="판매글 작성하기">
      <Input
        label="판매글 내용"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <Input
        label="대표 이미지"
        type="file"
        onChange={(e) => setImage(e.target.files?.[0] || null)}
      />
      <Button onClick={handleClickCreate}>작성하기</Button>
    </Page>
  );
}

export default CreateDealPage;
