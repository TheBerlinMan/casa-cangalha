"use client";

import React, { useState } from "react";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import EventList from "@/components/EventList";
import NewEventForm from "@/components/NewEventForm";
import EditEventForm from "@/components/EditEventForm";
import BlogList from "@/components/BlogList";
import NewBlogForm from "@/components/NewBlogForm";
import EditBlogForm from "@/components/EditBlogForm";
import ProductList from "@/components/ProductList";
import NewProductForm from "@/components/NewProductForm";
import EditProductForm from "@/components/EditProductForm";

const Admin = () => {
  // Manage the active section tab (Events, Blogs, Products)
  const [activeTab, setActiveTab] = useState("Events");
  // Manage form mode: "list" means we show the events list, "new" means NewEventForm, "edit" means EditEventForm.
  const [formMode, setFormMode] = useState<"list" | "new" | "edit">("list");
  // The ID of the event that we're currently editing
  const [editingEventId, setEditingEventId] = useState<string | null>(null);
  // The ID of the blog that we're currently editing
  const [editingBlogId, setEditingBlogId] = useState<string | null>(null);
  // The ID of the product that we're currently editing
  const [editingProductId, setEditingProductId] = useState<string | null>(null);

  // When the event update completes (from EditEventForm) you could perform additional tasks here.
  // For example, you might refresh the EventList or update local state.
  // In our case, simply return to the list mode.
  // const handleEventUpdate = (updatedEvent: IEventWithId) => {
  //   setFormMode("list");
  // };

  return (
    <div>
      <SignedOut>
        <div>Please sign in.</div>
      </SignedOut>
      <SignedIn>
        <div className="p-4">
          <div className="flex flex-row gap-4 min-h-[600px]">
            {/* Left Side - Tab List */}
            <div className="w-1/4 bg-gray-100 rounded-lg p-4">
              <div className="flex flex-col gap-2">
                {["Events", "Blogs", "Products"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => {
                      setActiveTab(tab);
                      // Reset form mode when switching tabs
                      setFormMode("list");
                      setEditingEventId(null);
                      setEditingBlogId(null);
                      setEditingProductId(null);
                    }}
                    className={`p-3 rounded-md text-left ${
                      activeTab === tab
                        ? "bg-blue-500 text-white"
                        : "hover:bg-gray-200"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="w-3/4 bg-white rounded-lg p-4 border">
              {activeTab === "Events" && (
                <div>
                  <div className="flex flex-row justify-between items-center">
                    <h2 className="text-2xl font-bold mb-4">
                      {formMode === "new"
                        ? "New Event"
                        : formMode === "edit"
                        ? "Edit Event"
                        : "Events"}
                    </h2>
                    {formMode === "list" && (
                      <button
                        onClick={() => setFormMode("new")}
                        className="bg-blue-500 text-white py-2 px-4 rounded-md mb-4"
                      >
                        New Event
                      </button>
                    )}
                  </div>
                  {formMode === "list" && (
                    <EventList
                      onEdit={(id: string) => {
                        setEditingEventId(id);
                        setFormMode("edit");
                      }}
                    />
                  )}
                  {formMode === "new" && (
                    <NewEventForm onCancel={() => setFormMode("list")} />
                  )}
                  {formMode === "edit" && editingEventId && (
                    <EditEventForm
                      eventId={editingEventId}
                      onCancel={() => setFormMode("list")}
                      // onUpdate={handleEventUpdate}
                    />
                  )}
                </div>
              )}
              {activeTab === "Blogs" && (
                <div>
                  <div className="flex flex-row justify-between items-center">
                    <h2 className="text-2xl font-bold mb-4">
                      {formMode === "new"
                        ? "New Blog Post"
                        : formMode === "edit"
                        ? "Edit Blog Post"
                        : "Blog Posts"}
                    </h2>
                    {formMode === "list" && (
                      <button
                        onClick={() => setFormMode("new")}
                        className="bg-blue-500 text-white py-2 px-4 rounded-md mb-4"
                      >
                        New Blog Post
                      </button>
                    )}
                  </div>
                  {formMode === "list" && (
                    <BlogList
                      onEdit={(id: string) => {
                        setEditingBlogId(id);
                        setFormMode("edit");
                      }}
                    />
                  )}
                  {formMode === "new" && (
                    <NewBlogForm onCancel={() => setFormMode("list")} />
                  )}
                  {formMode === "edit" && editingBlogId && (
                    <EditBlogForm
                      blogId={editingBlogId}
                      onCancel={() => setFormMode("list")}
                    />
                  )}
                </div>
              )}
              {activeTab === "Products" && (
                <div>
                  <div className="flex flex-row justify-between items-center">
                    <h2 className="text-2xl font-bold mb-4">
                      {formMode === "new"
                        ? "New Product"
                        : formMode === "edit"
                        ? "Edit Product"
                        : "Products"}
                    </h2>
                    {formMode === "list" && (
                      <button
                        onClick={() => setFormMode("new")}
                        className="bg-blue-500 text-white py-2 px-4 rounded-md mb-4"
                      >
                        New Product
                      </button>
                    )}
                  </div>
                  {formMode === "list" && (
                    <ProductList
                      onEdit={(id: string) => {
                        setEditingProductId(id);
                        setFormMode("edit");
                      }}
                    />
                  )}
                  {formMode === "new" && (
                    <NewProductForm onCancel={() => setFormMode("list")} />
                  )}
                  {formMode === "edit" && editingProductId && (
                    <EditProductForm
                      productId={editingProductId}
                      onCancel={() => setFormMode("list")}
                    />
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </SignedIn>
    </div>
  );
};

export default Admin;
