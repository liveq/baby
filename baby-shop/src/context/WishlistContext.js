import React, { createContext, useContext, useState, useEffect } from 'react';

const WishlistContext = createContext();

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
};

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  // Load wishlist from localStorage on mount
  useEffect(() => {
    const savedWishlist = localStorage.getItem('diora_wishlist');
    if (savedWishlist) {
      try {
        const parsed = JSON.parse(savedWishlist);
        setWishlist(parsed);
      } catch (error) {
        console.error('Failed to parse wishlist:', error);
        localStorage.removeItem('diora_wishlist');
      }
    }
  }, []);

  // Save wishlist to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('diora_wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  // Add item to wishlist
  const addToWishlist = (productId) => {
    if (!wishlist.includes(productId)) {
      setWishlist([...wishlist, productId]);
      return true;
    }
    return false;
  };

  // Remove item from wishlist
  const removeFromWishlist = (productId) => {
    setWishlist(wishlist.filter(id => id !== productId));
  };

  // Toggle item in wishlist
  const toggleWishlist = (productId) => {
    if (wishlist.includes(productId)) {
      removeFromWishlist(productId);
      return false;
    } else {
      addToWishlist(productId);
      return true;
    }
  };

  // Check if item is in wishlist
  const isInWishlist = (productId) => {
    return wishlist.includes(productId);
  };

  // Clear entire wishlist
  const clearWishlist = () => {
    setWishlist([]);
    localStorage.removeItem('diora_wishlist');
  };

  // Get wishlist count
  const getWishlistCount = () => {
    return wishlist.length;
  };

  const value = {
    wishlist,
    addToWishlist,
    removeFromWishlist,
    toggleWishlist,
    isInWishlist,
    clearWishlist,
    getWishlistCount,
  };

  return (
    <WishlistContext.Provider value={value}>
      {children}
    </WishlistContext.Provider>
  );
};
