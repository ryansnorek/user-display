import { useState } from "react";
import useForm from "../hooks/useForm";

export default function useTags() {
  const [input, handleChange, setInput] = useForm({ tag: "" });
  const [tags, setTags] = useState([]);
  
  const addNewTag = (e) => {
    if (e.key === "Enter") {
      setTags([...tags, input.tag]);
      setInput({ tag: "" });
    }
  };
  return [input, handleChange, tags, addNewTag];
}
