import React from 'react';
import { Download, FileText, Star, Award, Leaf, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { productDataService } from '@/data/enhancedProductData';

// PDF Generation utility (using jsPDF)
class CatalogPDFGenerator {
  private doc: any;
  
  constructor() {
    // In a real implementation, you would import jsPDF
    // For now, we'll simulate PDF generation
  }

  async generateCatalog(): Promise<Blob> {
    // Simulate PDF generation
    const pdfContent = this.createPDFContent();
    return new Blob([pdfContent], { type: 'application/pdf' });
  }

  private createPDFContent(): string {
    const products = productDataService.getAllProducts();
    
    return `
%PDF-1.4
1 0 obj
<<
/Type /Catalog
/Pages 2 0 R
>>
endobj

2 0 obj
<<
/Type /Pages
/Kids [3 0 R]
/Count 1
>>
endobj

3 0 obj
<<
/Type /Page
/Parent 2 0 R
/MediaBox [0 0 612 792]
/Contents 4 0 R
/Resources <<
  /Font <<
    /F1 5 0 R
  >>
>>
>>
endobj

4 0 obj
<<
/Length 1000
>>
stream
BT
/F1 24 Tf
50 750 Td
(SS TechFarming India - Product Catalog 2024) Tj
0 -50 Td
/F1 12 Tf
(Complete Agricultural Solutions) Tj
0 -30 Td
(Fresh Mushrooms • Organic Fertilizers • Agricultural Equipment) Tj
0 -50 Td
(${new Date().toLocaleDateString()}) Tj
ET
endstream
endobj

5 0 obj
<<
/Type /Font
/Subtype /Type1
/BaseFont /Helvetica
>>
endobj

xref
0 6
0000000000 65535 f 
0000000009 00000 n 
0000000058 00000 n 
0000000115 00000 n 
0000000274 00000 n 
0000001324 00000 n 
trailer
<<
/Size 6
/Root 1 0 R
>>
startxref
1398
%%EOF`;
  }
}

const CatalogDownload: React.FC = () => {
  const [isGenerating, setIsGenerating] = React.useState(false);
  const products = productDataService.getAllProducts();
  const sustainabilityReport = productDataService.getSustainabilityReport();

  const generateAndDownloadPDF = async () => {
    setIsGenerating(true);
    
    try {
      // Create comprehensive catalog content
      const catalogContent = createCatalogHTML();
      
      // Create a blob with the HTML content (for demonstration)
      const blob = new Blob([catalogContent], { type: 'text/html' });
      
      // Create download link
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'SS_TechFarming_Catalog_2024.html';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      
      // Track download
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'file_download', {
          file_name: 'SS_TechFarming_Catalog_2024',
          file_type: 'catalog'
        });
      }
    } catch (error) {
      console.error('Error generating catalog:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  const createCatalogHTML = (): string => {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SS TechFarming India - Product Catalog 2024</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { 
            font-family: 'Arial', sans-serif; 
            line-height: 1.6; 
            color: #333; 
            background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
        }
        .container { max-width: 1200px; margin: 0 auto; padding: 20px; }
        
        .header { 
            text-align: center; 
            padding: 40px 0; 
            background: linear-gradient(135deg, #2e7d32 0%, #4caf50 100%);
            color: white;
            border-radius: 20px;
            margin-bottom: 40px;
            box-shadow: 0 10px 30px rgba(46, 125, 50, 0.3);
        }
        
        .header h1 { 
            font-size: 3em; 
            margin-bottom: 10px;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        }
        
        .header p { 
            font-size: 1.2em; 
            opacity: 0.9;
            margin-bottom: 20px;
        }
        
        .company-info {
            background: white;
            padding: 30px;
            border-radius: 15px;
            margin-bottom: 30px;
            box-shadow: 0 5px 20px rgba(0,0,0,0.1);
        }
        
        .stats {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 20px;
            margin: 30px 0;
        }
        
        .stat-card {
            background: white;
            padding: 25px;
            border-radius: 15px;
            text-align: center;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
            border-left: 5px solid #4caf50;
        }
        
        .stat-number {
            font-size: 2.5em;
            font-weight: bold;
            color: #2e7d32;
            display: block;
        }
        
        .products-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 30px;
            margin: 40px 0;
        }
        
        .product-card {
            background: white;
            border-radius: 20px;
            padding: 25px;
            box-shadow: 0 8px 25px rgba(0,0,0,0.1);
            transition: transform 0.3s ease;
            border: 2px solid transparent;
        }
        
        .product-card:hover {
            transform: translateY(-5px);
            border-color: #4caf50;
        }
        
        .product-header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-bottom: 15px;
        }
        
        .product-title {
            font-size: 1.4em;
            font-weight: bold;
            color: #2e7d32;
            margin-bottom: 5px;
        }
        
        .product-category {
            background: #e8f5e8;
            color: #2e7d32;
            padding: 4px 12px;
            border-radius: 20px;
            font-size: 0.8em;
            font-weight: 600;
        }
        
        .product-description {
            color: #666;
            margin: 15px 0;
            line-height: 1.6;
        }
        
        .product-specs {
            background: #f8f9fa;
            padding: 15px;
            border-radius: 10px;
            margin: 15px 0;
        }
        
        .spec-row {
            display: flex;
            justify-content: space-between;
            margin: 8px 0;
            padding: 5px 0;
            border-bottom: 1px dotted #ddd;
        }
        
        .price-section {
            background: linear-gradient(135deg, #2e7d32, #4caf50);
            color: white;
            padding: 15px;
            border-radius: 10px;
            margin-top: 20px;
        }
        
        .price-row {
            display: flex;
            justify-content: space-between;
            margin: 5px 0;
        }
        
        .certifications {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            margin: 15px 0;
        }
        
        .cert-badge {
            background: #e3f2fd;
            color: #1976d2;
            padding: 4px 8px;
            border-radius: 12px;
            font-size: 0.75em;
            font-weight: 600;
        }
        
        .contact-section {
            background: linear-gradient(135deg, #2e7d32, #4caf50);
            color: white;
            padding: 40px;
            border-radius: 20px;
            margin: 40px 0;
            text-align: center;
        }
        
        .contact-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 30px;
            margin-top: 30px;
        }
        
        .contact-card {
            background: rgba(255,255,255,0.1);
            padding: 20px;
            border-radius: 15px;
            backdrop-filter: blur(10px);
        }
        
        .section-title {
            font-size: 2.5em;
            color: #2e7d32;
            text-align: center;
            margin: 40px 0 30px 0;
            position: relative;
        }
        
        .section-title::after {
            content: '';
            position: absolute;
            bottom: -10px;
            left: 50%;
            transform: translateX(-50%);
            width: 100px;
            height: 4px;
            background: linear-gradient(135deg, #2e7d32, #4caf50);
            border-radius: 2px;
        }
        
        @media print {
            body { background: white; }
            .product-card { break-inside: avoid; }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🌱 SS TechFarming India</h1>
            <p>Complete Agricultural Solutions & Premium Products</p>
            <p><strong>Product Catalog 2024</strong> • Generated on ${new Date().toLocaleDateString()}</p>
        </div>

        <div class="company-info">
            <h2>About SS TechFarming India</h2>
            <p>We are dedicated to revolutionizing Indian agriculture through innovative technology, sustainable practices, and premium quality products. Our comprehensive range includes fresh mushrooms, organic fertilizers, agricultural equipment, and consulting services designed to empower farmers and promote sustainable farming practices.</p>
            
            <div class="stats">
                <div class="stat-card">
                    <span class="stat-number">${sustainabilityReport.totalProducts}</span>
                    <div>Total Products</div>
                </div>
                <div class="stat-card">
                    <span class="stat-number">${sustainabilityReport.organicPercentage}%</span>
                    <div>Organic Products</div>
                </div>
                <div class="stat-card">
                    <span class="stat-number">${sustainabilityReport.avgSustainabilityScore}/10</span>
                    <div>Sustainability Score</div>
                </div>
                <div class="stat-card">
                    <span class="stat-number">200+</span>
                    <div>Farmers Supported</div>
                </div>
            </div>
        </div>

        <h2 class="section-title">Our Products</h2>
        
        <div class="products-grid">
            ${products.map(product => `
                <div class="product-card">
                    <div class="product-header">
                        <div>
                            <div class="product-title">${product.name}</div>
                            <div class="product-category">${product.category}</div>
                        </div>
                        <div style="text-align: right;">
                            <div style="color: #ffa726; font-size: 1.2em;">★ ${product.qualityMetrics.rating}</div>
                            <div style="font-size: 0.8em; color: #666;">${product.qualityMetrics.reviews} reviews</div>
                        </div>
                    </div>
                    
                    <div class="product-description">
                        ${product.description.detailed}
                    </div>
                    
                    <div class="product-specs">
                        <h4 style="color: #2e7d32; margin-bottom: 10px;">Specifications</h4>
                        <div class="spec-row">
                            <span>Shelf Life:</span>
                            <strong>${product.specifications.shelfLife}</strong>
                        </div>
                        <div class="spec-row">
                            <span>Packaging:</span>
                            <strong>${product.specifications.packaging.join(', ')}</strong>
                        </div>
                        <div class="spec-row">
                            <span>Origin:</span>
                            <strong>${product.specifications.origin}</strong>
                        </div>
                        <div class="spec-row">
                            <span>Storage:</span>
                            <strong>${product.specifications.storageConditions}</strong>
                        </div>
                    </div>
                    
                    ${product.nutritional ? `
                    <div class="product-specs">
                        <h4 style="color: #2e7d32; margin-bottom: 10px;">Nutritional Information (per 100g)</h4>
                        <div class="spec-row">
                            <span>Calories:</span>
                            <strong>${product.nutritional.calories}</strong>
                        </div>
                        <div class="spec-row">
                            <span>Protein:</span>
                            <strong>${product.nutritional.protein}</strong>
                        </div>
                        <div class="spec-row">
                            <span>Fiber:</span>
                            <strong>${product.nutritional.fiber}</strong>
                        </div>
                        <div class="spec-row">
                            <span>Key Minerals:</span>
                            <strong>${product.nutritional.minerals.join(', ')}</strong>
                        </div>
                    </div>
                    ` : ''}
                    
                    <div class="certifications">
                        ${product.specifications.certifications.map(cert => `
                            <span class="cert-badge">✓ ${cert}</span>
                        `).join('')}
                    </div>
                    
                    <div class="price-section">
                        <h4 style="margin-bottom: 10px;">Pricing</h4>
                        <div class="price-row">
                            <span>Retail Price:</span>
                            <strong>${product.price.retail}</strong>
                        </div>
                        <div class="price-row">
                            <span>Bulk Price:</span>
                            <strong>${product.price.bulk}</strong>
                        </div>
                        <div class="price-row">
                            <span>Min. Order:</span>
                            <strong>${product.businessInfo.minimumOrder}</strong>
                        </div>
                        <div class="price-row">
                            <span>Lead Time:</span>
                            <strong>${product.businessInfo.leadTime}</strong>
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>

        <div class="contact-section">
            <h2>Contact Us for Orders & Inquiries</h2>
            <p>Ready to transform your agricultural business? Get in touch with our expert team.</p>
            
            <div class="contact-grid">
                <div class="contact-card">
                    <h3>📞 Call Us</h3>
                    <p><strong>+91 79923 38119</strong></p>
                    <p>Mon-Sat: 9 AM - 6 PM</p>
                </div>
                
                <div class="contact-card">
                    <h3>📧 Email Us</h3>
                    <p><strong>info@sstechfarmingindia.com</strong></p>
                    <p>Quick response within 24 hours</p>
                </div>
                
                <div class="contact-card">
                    <h3>🌐 Visit Website</h3>
                    <p><strong>www.sstechfarmingindia.com</strong></p>
                    <p>Online catalog & quote requests</p>
                </div>
                
                <div class="contact-card">
                    <h3>📍 Visit Us</h3>
                    <p><strong>Bokaro, Jharkhand</strong></p>
                    <p>India 🇮🇳</p>
                </div>
            </div>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid rgba(255,255,255,0.3);">
                <p><strong>Bulk Orders:</strong> Special pricing available for orders above 100kg</p>
                <p><strong>Custom Packaging:</strong> Branding and packaging solutions available</p>
                <p><strong>Consultation:</strong> Free agricultural consultation for bulk customers</p>
            </div>
        </div>

        <div style="text-align: center; padding: 20px; color: #666; border-top: 1px solid #eee;">
            <p><strong>© 2024 SS TechFarming India.</strong> All rights reserved.</p>
            <p>Empowering Indian Agriculture Through Innovation</p>
            <p style="font-size: 0.9em; margin-top: 10px;">
                This catalog contains ${products.length} products across ${sustainabilityReport.totalProducts} categories.<br>
                Generated on ${new Date().toLocaleDateString()} • Version 2024.1
            </p>
        </div>
    </div>
</body>
</html>`;
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center space-x-3">
          <FileText className="w-6 h-6 text-agri-primary" />
          <span>SS TechFarming Product Catalog</span>
        </CardTitle>
        <p className="text-muted-foreground">
          Complete product catalog with detailed specifications, pricing, and company information
        </p>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Catalog Preview */}
        <div className="grid md:grid-cols-3 gap-4">
          <div className="text-center">
            <div className="text-3xl font-bold text-agri-primary">{products.length}</div>
            <div className="text-sm text-muted-foreground">Total Products</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-agri-secondary">{sustainabilityReport.organicPercentage}%</div>
            <div className="text-sm text-muted-foreground">Organic Products</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-agri-earth">25+</div>
            <div className="text-sm text-muted-foreground">Pages</div>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold mb-3 flex items-center">
              <Package className="w-4 h-4 mr-2 text-agri-primary" />
              Catalog Contents
            </h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center space-x-2">
                <Star className="w-3 h-3 text-yellow-500" />
                <span>Fresh Mushroom Varieties</span>
              </li>
              <li className="flex items-center space-x-2">
                <Leaf className="w-3 h-3 text-green-500" />
                <span>Organic Fertilizer Range</span>
              </li>
              <li className="flex items-center space-x-2">
                <Award className="w-3 h-3 text-blue-500" />
                <span>Quality Certifications</span>
              </li>
              <li className="flex items-center space-x-2">
                <Package className="w-3 h-3 text-purple-500" />
                <span>Packaging Options</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3">Catalog Features</h4>
            <div className="space-y-2">
              <Badge variant="outline">Detailed Specifications</Badge>
              <Badge variant="outline">Nutritional Information</Badge>
              <Badge variant="outline">Pricing & Bulk Discounts</Badge>
              <Badge variant="outline">Contact Information</Badge>
              <Badge variant="outline">Company Overview</Badge>
              <Badge variant="outline">Quality Standards</Badge>
            </div>
          </div>
        </div>

        {/* Download Button */}
        <div className="text-center pt-6 border-t">
          <Button
            onClick={generateAndDownloadPDF}
            disabled={isGenerating}
            className="bg-gradient-to-r from-agri-primary to-agri-secondary hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
            size="lg"
          >
            {isGenerating ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                Generating Catalog...
              </>
            ) : (
              <>
                <Download className="w-5 h-5 mr-2" />
                Download Complete Catalog
              </>
            )}
          </Button>
          <p className="text-xs text-muted-foreground mt-2">
            HTML format • {(products.length * 0.5).toFixed(1)} MB • Updated {new Date().toLocaleDateString()}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default CatalogDownload;