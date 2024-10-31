'use client'

import React, { useState, useEffect } from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Trash2 } from "lucide-react"
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'

export default function AdminContactForm() {
  const [entries, setEntries] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [selectedEntry, setSelectedEntry] = useState(null)

  const router = useRouter()

  // Check if the user is authenticated on component mount
  useEffect(() => {
    const token = localStorage.getItem('token'); // Assuming the token is stored in localStorage
    const role = localStorage.getItem('role'); // Fetching the role from localStorage
  
    if (!token || role !== 'admin') {
      // Redirect to login if not authenticated or not an admin
      router.push('/login');
    } else {
      fetchEntries(); // If authenticated, fetch entries
    }
  }, [router]);

  const fetchEntries = async () => {
  setIsLoading(true);
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/contact/getall`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}` // Add the token to the headers
      }
    });
    
    if (response.ok) {
      const data = await response.json();
      setEntries(data);
    } else if (response.status === 403) {
      // If the user is not authorized, redirect to the login page
      toast.error('You do not have permission to view this page.');
      router.push('/login');
    } else {
      toast.error('Failed to fetch entries');
    }
  } catch (error) {
    console.error('Error fetching entries:', error);
    toast.error('An error occurred while fetching entries');
  } finally {
    setIsLoading(false);
  }
};

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/contact/delete/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}` // Add the token to the headers
        }
      });
      if (response.ok) {
        setEntries(entries.filter(entry => entry._id !== id))
        toast.success('Entry deleted successfully')
        window.location.reload()
      } else {
        toast.error('Failed to delete entry')
      }
    } catch (error) {
      console.error('Error deleting entry:', error)
      toast.error('An error occurred while deleting the entry')
    }
  }

  const handleRowClick = (entry) => {
    setSelectedEntry(entry)
  }

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 w-full min-h-screen bg-[#F8FFF8]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-4xl font-bold text-[#130F26] mb-4">
            Contact Form Submissions
          </h2>
          <p className="text-lg text-[#4A5568]">
            View and manage all contact form submissions here.
          </p>
        </div>
        {isLoading ? (
          <p className="text-center text-[#4A5568]">Loading entries...</p>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead>Message</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {entries.map((entry) => (
                <TableRow 
                  key={entry._id} 
                  className="cursor-pointer hover:bg-gray-100"
                  onClick={() => handleRowClick(entry)}
                >
                  <TableCell>{`${entry.firstName} ${entry.lastName}`}</TableCell>
                  <TableCell>{entry.email}</TableCell>
                  <TableCell>{entry.phone}</TableCell>
                  <TableCell className="max-w-xs truncate">{entry.message}</TableCell>
                  <TableCell>{new Date(entry.createdAt).toLocaleDateString()}</TableCell>
                  <TableCell>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation()
                        handleDelete(entry._id)
                      }}
                    >
                      <Trash2 className="h-4 w-4 mr-2" />
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </div>

      <Dialog open={!!selectedEntry} onOpenChange={() => setSelectedEntry(null)}>
        <DialogContent className="sm:max-w-[600px] md:max-w-[700px] lg:max-w-[800px] w-11/12">
          <DialogHeader>
            <DialogTitle>Contact Form Submission Details</DialogTitle>
            <DialogDescription>
              Full details of the selected submission.
            </DialogDescription>
          </DialogHeader>
          <ScrollArea className="max-h-[60vh] overflow-auto">
            {selectedEntry && (
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <span className="font-bold">Name:</span>
                  <span className="col-span-3">{`${selectedEntry.firstName} ${selectedEntry.lastName}`}</span>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <span className="font-bold">Email:</span>
                  <span className="col-span-3">{selectedEntry.email}</span>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <span className="font-bold">Phone:</span>
                  <span className="col-span-3">{selectedEntry.phone}</span>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <span className="font-bold">Date:</span>
                  <span className="col-span-3">{new Date(selectedEntry.createdAt).toLocaleString()}</span>
                </div>
                <div className="grid grid-cols-4 items-start gap-4">
                  <span className="font-bold">Message:</span>
                  <span className="col-span-3 whitespace-pre-wrap">{selectedEntry.message}</span>
                </div>
              </div>
            )}
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </div>
  )
}
