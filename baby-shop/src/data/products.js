// DIORA BABY - Product Data Structure

export const categories = [
  { id: 'all', name: '전체', icon: '🏠' },
  { id: 'bedding', name: '낮잠이불', icon: '🛏️' },
  { id: 'blankets', name: '블랭킷', icon: '🧸' },
  { id: 'pillows', name: '베개', icon: '😴' },
  { id: 'towels', name: '타올', icon: '🧺' },
  { id: 'baby-care', name: '베이비케어', icon: '👶' },
];

export const products = [
  // 낮잠이불 (Nap Bedding)
  {
    id: 'nb001',
    name: '포몽드 프리미엄 낮잠이불 세트',
    category: 'bedding',
    price: 89000,
    originalPrice: 129000,
    discount: 31,
    image: 'https://via.placeholder.com/400x400/FBF6ED/B8860B?text=Nap+Bedding+Set',
    status: 'best',
    description: '어린이집 필수템! 부드러운 면 100% 낮잠이불 세트',
    rating: 4.9,
    reviewCount: 1284,
    stock: 45,
    tags: ['면100%', '항균처리', '세탁가능', '어린이집추천'],
    badges: ['BEST', 'SALE'],
  },
  {
    id: 'nb002',
    name: '디오라 베이비 순면 낮잠이불',
    category: 'bedding',
    price: 79000,
    originalPrice: 99000,
    discount: 20,
    image: 'https://via.placeholder.com/400x400/EFE7D9/B8860B?text=Cotton+Bedding',
    status: 'new',
    description: '통기성 좋은 순면 소재로 아이가 편안하게',
    rating: 4.8,
    reviewCount: 892,
    stock: 32,
    tags: ['순면', '통기성', '저자극', '친환경'],
    badges: ['NEW'],
  },
  {
    id: 'nb003',
    name: '사계절 낮잠이불 풀세트',
    category: 'bedding',
    price: 95000,
    originalPrice: 135000,
    discount: 30,
    image: 'https://via.placeholder.com/400x400/FFEBDF/B8860B?text=All+Season+Set',
    status: 'best',
    description: '여름/겨울 모두 사용 가능한 사계절 낮잠이불',
    rating: 4.7,
    reviewCount: 756,
    stock: 28,
    tags: ['사계절', '리버시블', '세트구성', '어린이집'],
    badges: ['BEST'],
  },
  {
    id: 'nb004',
    name: '프리미엄 오가닉 낮잠이불',
    category: 'bedding',
    price: 129000,
    originalPrice: null,
    discount: 0,
    image: 'https://via.placeholder.com/400x400/FBF6ED/8B6914?text=Organic+Bedding',
    status: 'premium',
    description: 'GOTS 인증 유기농 면 100% 프리미엄 낮잠이불',
    rating: 5.0,
    reviewCount: 423,
    stock: 15,
    tags: ['GOTS인증', '유기농', '프리미엄', '저자극'],
    badges: ['PREMIUM'],
  },

  // 블랭킷 (Blankets)
  {
    id: 'bl001',
    name: '디오라 순면 블랭킷',
    category: 'blankets',
    price: 39000,
    originalPrice: 59000,
    discount: 34,
    image: 'https://via.placeholder.com/400x400/FBF6ED/B8860B?text=Cotton+Blanket',
    status: 'best',
    description: '부드럽고 따뜻한 순면 블랭킷',
    rating: 4.8,
    reviewCount: 634,
    stock: 67,
    tags: ['순면', '보들보들', '세탁기가능'],
    badges: ['BEST', 'SALE'],
  },
  {
    id: 'bl002',
    name: '거즈 멀티 블랭킷',
    category: 'blankets',
    price: 29000,
    originalPrice: 39000,
    discount: 26,
    image: 'https://via.placeholder.com/400x400/EFE7D9/B8860B?text=Gauze+Blanket',
    status: 'new',
    description: '통기성 좋은 6겹 거즈 멀티 블랭킷',
    rating: 4.7,
    reviewCount: 512,
    stock: 89,
    tags: ['거즈', '통기성', '6겹', '여름용'],
    badges: ['NEW'],
  },
  {
    id: 'bl003',
    name: '밤부 쿨링 블랭킷',
    category: 'blankets',
    price: 45000,
    originalPrice: 65000,
    discount: 31,
    image: 'https://via.placeholder.com/400x400/FFEBDF/B8860B?text=Bamboo+Cooling',
    status: 'summer',
    description: '여름철 필수! 시원한 밤부 쿨링 블랭킷',
    rating: 4.9,
    reviewCount: 892,
    stock: 43,
    tags: ['밤부', '쿨링', '여름', '접촉냉감'],
    badges: ['SUMMER', 'SALE'],
  },
  {
    id: 'bl004',
    name: '프리미엄 양면 블랭킷',
    category: 'blankets',
    price: 55000,
    originalPrice: null,
    discount: 0,
    image: 'https://via.placeholder.com/400x400/FBF6ED/8B6914?text=Double+Blanket',
    status: 'premium',
    description: '한쪽은 부드럽게, 한쪽은 따뜻하게',
    rating: 4.8,
    reviewCount: 345,
    stock: 56,
    tags: ['양면', '리버시블', '사계절'],
    badges: [],
  },

  // 베개 (Pillows)
  {
    id: 'pl001',
    name: '디오라 메모리폼 아기베개',
    category: 'pillows',
    price: 35000,
    originalPrice: 49000,
    discount: 29,
    image: 'https://via.placeholder.com/400x400/FBF6ED/B8860B?text=Memory+Pillow',
    status: 'best',
    description: '아기 목을 편안하게 받쳐주는 메모리폼 베개',
    rating: 4.9,
    reviewCount: 1123,
    stock: 78,
    tags: ['메모리폼', '목보호', '통기성'],
    badges: ['BEST', 'SALE'],
  },
  {
    id: 'pl002',
    name: '오가닉 순면 베개',
    category: 'pillows',
    price: 29000,
    originalPrice: null,
    discount: 0,
    image: 'https://via.placeholder.com/400x400/EFE7D9/B8860B?text=Organic+Pillow',
    status: 'new',
    description: '유기농 순면 100% 아기베개',
    rating: 4.7,
    reviewCount: 567,
    stock: 92,
    tags: ['유기농', '순면', '저자극'],
    badges: ['NEW'],
  },
  {
    id: 'pl003',
    name: '3D 에어메쉬 베개',
    category: 'pillows',
    price: 42000,
    originalPrice: 58000,
    discount: 28,
    image: 'https://via.placeholder.com/400x400/FFEBDF/B8860B?text=3D+Air+Pillow',
    status: 'summer',
    description: '통기성 최고! 여름철 쿨링 베개',
    rating: 4.8,
    reviewCount: 723,
    stock: 61,
    tags: ['3D메쉬', '통기성', '쿨링'],
    badges: ['SUMMER'],
  },
  {
    id: 'pl004',
    name: '낮잠 목 베개 세트',
    category: 'pillows',
    price: 25000,
    originalPrice: 35000,
    discount: 29,
    image: 'https://via.placeholder.com/400x400/FBF6ED/8B6914?text=Neck+Pillow',
    status: 'normal',
    description: '어린이집 낮잠시간 필수템',
    rating: 4.6,
    reviewCount: 445,
    stock: 104,
    tags: ['목베개', '어린이집', '휴대용'],
    badges: ['SALE'],
  },

  // 타올 (Towels)
  {
    id: 'tw001',
    name: '프리미엄 순면 타올 세트',
    category: 'towels',
    price: 32000,
    originalPrice: 45000,
    discount: 29,
    image: 'https://via.placeholder.com/400x400/FBF6ED/B8860B?text=Towel+Set',
    status: 'best',
    description: '부드러운 순면 타올 4종 세트',
    rating: 4.8,
    reviewCount: 892,
    stock: 123,
    tags: ['순면', '4종세트', '흡수력'],
    badges: ['BEST', 'SALE'],
  },
  {
    id: 'tw002',
    name: '항균 대나무 타올',
    category: 'towels',
    price: 28000,
    originalPrice: null,
    discount: 0,
    image: 'https://via.placeholder.com/400x400/EFE7D9/B8860B?text=Bamboo+Towel',
    status: 'new',
    description: '천연 항균력의 대나무 타올',
    rating: 4.7,
    reviewCount: 534,
    stock: 87,
    tags: ['대나무', '항균', '친환경'],
    badges: ['NEW'],
  },
  {
    id: 'tw003',
    name: '거즈 목욕타올 세트',
    category: 'towels',
    price: 35000,
    originalPrice: 49000,
    discount: 29,
    image: 'https://via.placeholder.com/400x400/FFEBDF/B8860B?text=Bath+Towel',
    status: 'normal',
    description: '부드럽고 빠른 건조! 6겹 거즈 목욕타올',
    rating: 4.9,
    reviewCount: 678,
    stock: 65,
    tags: ['거즈', '목욕타올', '6겹'],
    badges: ['SALE'],
  },

  // 베이비케어 (Baby Care)
  {
    id: 'bc001',
    name: '디오라 방수 침대 패드',
    category: 'baby-care',
    price: 38000,
    originalPrice: 52000,
    discount: 27,
    image: 'https://via.placeholder.com/400x400/FBF6ED/B8860B?text=Waterproof+Pad',
    status: 'best',
    description: '완벽 방수! 세탁 가능한 침대 패드',
    rating: 4.9,
    reviewCount: 1456,
    stock: 234,
    tags: ['방수', '세탁가능', '통기성'],
    badges: ['BEST', 'SALE'],
  },
  {
    id: 'bc002',
    name: '순면 속싸개 세트',
    category: 'baby-care',
    price: 45000,
    originalPrice: 65000,
    discount: 31,
    image: 'https://via.placeholder.com/400x400/EFE7D9/B8860B?text=Swaddle+Set',
    status: 'new',
    description: '신생아 필수 순면 속싸개 3종 세트',
    rating: 4.8,
    reviewCount: 934,
    stock: 156,
    tags: ['속싸개', '신생아', '3종세트'],
    badges: ['NEW'],
  },
  {
    id: 'bc003',
    name: '유아용 경추 베개',
    category: 'baby-care',
    price: 42000,
    originalPrice: null,
    discount: 0,
    image: 'https://via.placeholder.com/400x400/FFEBDF/B8860B?text=Cervical+Pillow',
    status: 'premium',
    description: '성장기 아이 경추 건강을 위한 베개',
    rating: 4.7,
    reviewCount: 523,
    stock: 89,
    tags: ['경추', '성장기', '건강'],
    badges: ['PREMIUM'],
  },
  {
    id: 'bc004',
    name: '아기 침대 가드 세트',
    category: 'baby-care',
    price: 89000,
    originalPrice: 129000,
    discount: 31,
    image: 'https://via.placeholder.com/400x400/FBF6ED/8B6914?text=Bed+Guard',
    status: 'normal',
    description: '안전한 수면을 위한 침대 가드',
    rating: 4.8,
    reviewCount: 678,
    stock: 43,
    tags: ['안전', '침대가드', '세트'],
    badges: ['SALE'],
  },
];

// Helper functions
export const getProductById = (id) => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (categoryId) => {
  if (categoryId === 'all') return products;
  return products.filter(product => product.category === categoryId);
};

export const getBestProducts = (limit = 8) => {
  return products
    .filter(product => product.status === 'best')
    .slice(0, limit);
};

export const getNewProducts = (limit = 8) => {
  return products
    .filter(product => product.status === 'new')
    .slice(0, limit);
};

export const getDiscountedProducts = (limit = 8) => {
  return products
    .filter(product => product.discount > 0)
    .sort((a, b) => b.discount - a.discount)
    .slice(0, limit);
};

export const searchProducts = (query) => {
  const lowercaseQuery = query.toLowerCase();
  return products.filter(product =>
    product.name.toLowerCase().includes(lowercaseQuery) ||
    product.description.toLowerCase().includes(lowercaseQuery) ||
    product.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
};
