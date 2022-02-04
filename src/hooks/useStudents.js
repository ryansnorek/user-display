import axios from "axios";
import { BASE_URL } from "../constants";
import { useState, useEffect } from "react";

export default function useStudents() {
  const [students, setStudents] = useState(undefined);
  const [errors, setErrors] = useState("");

  useEffect(function fetchStudents() {
    axios
      .get(`${BASE_URL}/api/?results=50`)
      .then((res) => {
        setStudents(res.data.results);
      })
      .catch((err) => {
        setErrors(err);
      });
  }, []);

  return [students, errors];
}
