import { Outlet } from "react-router-dom";
import { Navbar } from "@components/Navbar";
import { Blob } from "@components/Blob";
import { Loki } from "@components/Loki";
import "./style.css";

export function Layout() {
  return (
    <div className="page-layout">
      <Blob />
      <Navbar />

      <main className="page-content">
        <Outlet />
      </main>

      <footer className="page-footer">
        <Loki text="ADITYA" />
      </footer>
    </div>
  );
}
