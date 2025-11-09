"use client";

import { useEffect, useState } from "react";

export type Board = {
  id: number;
  title: string;
  lists?: { id: number; title: string }[];
};

export function useBoards() {
  const [boards, setBoards] = useState<Board[]>([]);

  // 🔹 Carrega boards salvas no localStorage quando o hook é inicializado
  useEffect(() => {
    const stored = localStorage.getItem("boards");
    if (stored) {
      try {
        setBoards(JSON.parse(stored));
      } catch {
        console.error("Erro ao ler boards do localStorage");
      }
    }
  }, []);

  // 🔹 Salva automaticamente no localStorage quando `boards` muda
  useEffect(() => {
    localStorage.setItem("boards", JSON.stringify(boards));
  }, [boards]);

  // 🔹 Cria uma nova board
  const createBoard = (title: string) => {
    if (!title.trim()) return null;

    const newBoard: Board = {
      id: Date.now(),
      title: title.trim(),
      lists: [],
    };

    const updated = [...boards, newBoard];
    setBoards(updated);
    return newBoard; // útil pra redirecionar depois
  };

  // 🔹 Busca uma board pelo ID
  const getBoardById = (id: string | number) =>
    boards.find((b) => b.id.toString() === id.toString());

  // 🔹 Atualiza uma board (por exemplo, pra adicionar listas)
  const updateBoard = (updatedBoard: Board) => {
    const updated = boards.map((b) =>
      b.id === updatedBoard.id ? updatedBoard : b
    );
    setBoards(updated);
  };

  return { boards, setBoards, createBoard, getBoardById, updateBoard };
}
